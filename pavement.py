import paver
from paver.easy import *
import paver.setuputils
paver.setuputils.install_distutils_tasks()
import os, sys, socket
from runestone.server import get_dburl
from sphinxcontrib import paverutils
import pkg_resources

sys.path.append(os.getcwd())

home_dir = os.getcwd()
hostname = socket.gethostname()
if hostname in ['runestone-deploy', 'rsbuilder', 'runestone.academy']:
    master_url = 'https://runestone.academy'
elif hostname == 'fopp.learningpython.today':
    master_url = 'https://fopp.learningpython.today'
else:
    master_url = 'http://127.0.0.1:8000'

master_app = 'runestone'
serving_dir = "./build/fopp"
dest = "../../static"

options(
    sphinx = Bunch(docroot=".",),

    build = Bunch(
        builddir="./build/fopp",
        sourcedir="_sources",
        outdir="./build/fopp",
        confdir=".",
        project_name = "fopp",
        template_args={'course_id': 'fopp',
                       'login_required':'false',
                       'appname':master_app,
                       'loglevel': 10,
                       'course_url':master_url,
                       'use_services': 'true',
                       'python3': 'true',
                       'dburl': 'postgresql://user:password@localhost/runestone',
                       'default_ac_lang': 'python',
                       'basecourse': 'fopp',
                       'jobe_server': 'http://jobe2.cosc.canterbury.ac.nz',
                       'proxy_uri_runs': '/jobe/index.php/restapi/runs/',
                       'proxy_uri_files': '/jobe/index.php/restapi/files/',
                       'downloads_enabled': 'false',
                       'enable_chatcodes': 'false'
                        }
    )
)

version = pkg_resources.require("runestone")[0].version
options.build.template_args['runestone_version'] = version

# If DBURL is in the environment override dburl
options.build.template_args['dburl'] = get_dburl(outer=locals())

from runestone import build  # build is called implicitly by the paver driver.

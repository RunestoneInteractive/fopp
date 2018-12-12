def extractText(blob):
    if "<code" in blob:
        return extractTextHelper("", blob)

    return blob

def extractTextHelper(title, blob):
    if "<code" not in blob:
        title += blob
        return title


    idx0 = blob.find("<code")

    firstSub = blob[0:idx0]
    title += firstSub

    idx1 = blob.find("\"pre\">")
    idx2 = blob.find("</span>")
    secondSub = blob[idx1+6:idx2]
    title += secondSub
    title += " "

    idx3 = blob.find("</code>")

    thirdSub = blob[idx3+7:]

    return extractTextHelper(title, thirdSub)


def extractTextII(blob):
    if "<strong>" in blob:
        title = ""
        idx0 = blob.find("<strong>")

        firstSub = blob[0:idx0]
        title += firstSub

        idx1 = blob.find("</strong")
        secondSub = blob[idx0+8:idx1]
        title += secondSub
        title += " "

        thirdSub = blob[idx1+10:]
        title += thirdSub

        return title

    return blob
if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["fopp_2_clens10_1_1"] = {"code": "eng2sp = {}\neng2sp['one'] = 'uno'\neng2sp['two'] = 'dos'\neng2sp['three'] = 'tres'\nprint(eng2sp)\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"eng2sp": ["REF", 1]}, "ordered_globals": ["eng2sp"], "stack_to_render": [], "heap": {"1": ["DICT"]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"eng2sp": ["REF", 1]}, "ordered_globals": ["eng2sp"], "stack_to_render": [], "heap": {"1": ["DICT", ["one", "uno"]]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"eng2sp": ["REF", 1]}, "ordered_globals": ["eng2sp"], "stack_to_render": [], "heap": {"1": ["DICT", ["one", "uno"], ["two", "dos"]]}, "stdout": ""}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"eng2sp": ["REF", 1]}, "ordered_globals": ["eng2sp"], "stack_to_render": [], "heap": {"1": ["DICT", ["one", "uno"], ["two", "dos"], ["three", "tres"]]}, "stdout": ""}, {"line": 5, "event": "return", "func_name": "<module>", "globals": {"eng2sp": ["REF", 1]}, "ordered_globals": ["eng2sp"], "stack_to_render": [], "heap": {"1": ["DICT", ["one", "uno"], ["two", "dos"], ["three", "tres"]]}, "stdout": "{'one': 'uno', 'two': 'dos', 'three': 'tres'}\n"}]}
if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["fopp_2_clens11_4_2"] = {"code": "def square(x):\n    y = x * x\n    print(y)   # Bad! This is confusing! Should use return instead!\n\ntoSquare = 10\nsquareResult = square(toSquare)\nprint(\"The result of {} squared is {}.\".format(toSquare, squareResult))\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1]}, "ordered_globals": ["square"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "toSquare": 10}, "ordered_globals": ["square", "toSquare"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 1, "event": "call", "func_name": "square", "globals": {"square": ["REF", 1], "toSquare": 10}, "ordered_globals": ["square", "toSquare"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": 10}, "ordered_varnames": ["x"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "square", "globals": {"square": ["REF", 1], "toSquare": 10}, "ordered_globals": ["square", "toSquare"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": 10}, "ordered_varnames": ["x"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "square", "globals": {"square": ["REF", 1], "toSquare": 10}, "ordered_globals": ["square", "toSquare"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": 10, "y": 100}, "ordered_varnames": ["x", "y"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 3, "event": "return", "func_name": "square", "globals": {"square": ["REF", 1], "toSquare": 10}, "ordered_globals": ["square", "toSquare"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": 10, "y": 100, "__return__": null}, "ordered_varnames": ["x", "y", "__return__"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": "100\n"}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "toSquare": 10, "squareResult": null}, "ordered_globals": ["square", "toSquare", "squareResult"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": "100\n"}, {"line": 7, "event": "return", "func_name": "<module>", "globals": {"square": ["REF", 1], "toSquare": 10, "squareResult": null}, "ordered_globals": ["square", "toSquare", "squareResult"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": "100\nThe result of 10 squared is None.\n"}]}
if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["fopp_2_clens11_9_1"] = {"code": "def square(x):\n    y = x * x\n    return y\n\ndef sum_of_squares(x,y,z):\n    a = square(x)\n    b = square(y)\n    c = square(z)\n\n    return a+b+c\n\na = -5\nb = 2\nc = 10\nresult = sum_of_squares(a,b,c)\nprint(result)\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1]}, "ordered_globals": ["square"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 12, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2]}, "ordered_globals": ["square", "sum_of_squares"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 13, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5}, "ordered_globals": ["square", "sum_of_squares", "a"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 14, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2}, "ordered_globals": ["square", "sum_of_squares", "a", "b"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 15, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 5, "event": "call", "func_name": "sum_of_squares", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10}, "ordered_varnames": ["x", "y", "z"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sum_of_squares_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "sum_of_squares", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10}, "ordered_varnames": ["x", "y", "z"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sum_of_squares_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 1, "event": "call", "func_name": "square", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10}, "ordered_varnames": ["x", "y", "z"], "is_zombie": false, "is_highlighted": false, "unique_hash": "sum_of_squares_f1"}, {"func_name": "square", "is_parent": false, "frame_id": 2, "parent_frame_id_list": [], "encoded_locals": {"x": -5}, "ordered_varnames": ["x"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f2"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "square", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10}, "ordered_varnames": ["x", "y", "z"], "is_zombie": false, "is_highlighted": false, "unique_hash": "sum_of_squares_f1"}, {"func_name": "square", "is_parent": false, "frame_id": 2, "parent_frame_id_list": [], "encoded_locals": {"x": -5}, "ordered_varnames": ["x"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f2"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "square", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10}, "ordered_varnames": ["x", "y", "z"], "is_zombie": false, "is_highlighted": false, "unique_hash": "sum_of_squares_f1"}, {"func_name": "square", "is_parent": false, "frame_id": 2, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 25}, "ordered_varnames": ["x", "y"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f2"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 3, "event": "return", "func_name": "square", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10}, "ordered_varnames": ["x", "y", "z"], "is_zombie": false, "is_highlighted": false, "unique_hash": "sum_of_squares_f1"}, {"func_name": "square", "is_parent": false, "frame_id": 2, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 25, "__return__": 25}, "ordered_varnames": ["x", "y", "__return__"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f2"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 7, "event": "step_line", "func_name": "sum_of_squares", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10, "a": 25}, "ordered_varnames": ["x", "y", "z", "a"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sum_of_squares_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 1, "event": "call", "func_name": "square", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10, "a": 25}, "ordered_varnames": ["x", "y", "z", "a"], "is_zombie": false, "is_highlighted": false, "unique_hash": "sum_of_squares_f1"}, {"func_name": "square", "is_parent": false, "frame_id": 3, "parent_frame_id_list": [], "encoded_locals": {"x": 2}, "ordered_varnames": ["x"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f3"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "square", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10, "a": 25}, "ordered_varnames": ["x", "y", "z", "a"], "is_zombie": false, "is_highlighted": false, "unique_hash": "sum_of_squares_f1"}, {"func_name": "square", "is_parent": false, "frame_id": 3, "parent_frame_id_list": [], "encoded_locals": {"x": 2}, "ordered_varnames": ["x"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f3"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "square", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10, "a": 25}, "ordered_varnames": ["x", "y", "z", "a"], "is_zombie": false, "is_highlighted": false, "unique_hash": "sum_of_squares_f1"}, {"func_name": "square", "is_parent": false, "frame_id": 3, "parent_frame_id_list": [], "encoded_locals": {"x": 2, "y": 4}, "ordered_varnames": ["x", "y"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f3"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 3, "event": "return", "func_name": "square", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10, "a": 25}, "ordered_varnames": ["x", "y", "z", "a"], "is_zombie": false, "is_highlighted": false, "unique_hash": "sum_of_squares_f1"}, {"func_name": "square", "is_parent": false, "frame_id": 3, "parent_frame_id_list": [], "encoded_locals": {"x": 2, "y": 4, "__return__": 4}, "ordered_varnames": ["x", "y", "__return__"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f3"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 8, "event": "step_line", "func_name": "sum_of_squares", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10, "a": 25, "b": 4}, "ordered_varnames": ["x", "y", "z", "a", "b"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sum_of_squares_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 1, "event": "call", "func_name": "square", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10, "a": 25, "b": 4}, "ordered_varnames": ["x", "y", "z", "a", "b"], "is_zombie": false, "is_highlighted": false, "unique_hash": "sum_of_squares_f1"}, {"func_name": "square", "is_parent": false, "frame_id": 4, "parent_frame_id_list": [], "encoded_locals": {"x": 10}, "ordered_varnames": ["x"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f4"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "square", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10, "a": 25, "b": 4}, "ordered_varnames": ["x", "y", "z", "a", "b"], "is_zombie": false, "is_highlighted": false, "unique_hash": "sum_of_squares_f1"}, {"func_name": "square", "is_parent": false, "frame_id": 4, "parent_frame_id_list": [], "encoded_locals": {"x": 10}, "ordered_varnames": ["x"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f4"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "square", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10, "a": 25, "b": 4}, "ordered_varnames": ["x", "y", "z", "a", "b"], "is_zombie": false, "is_highlighted": false, "unique_hash": "sum_of_squares_f1"}, {"func_name": "square", "is_parent": false, "frame_id": 4, "parent_frame_id_list": [], "encoded_locals": {"x": 10, "y": 100}, "ordered_varnames": ["x", "y"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f4"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 3, "event": "return", "func_name": "square", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10, "a": 25, "b": 4}, "ordered_varnames": ["x", "y", "z", "a", "b"], "is_zombie": false, "is_highlighted": false, "unique_hash": "sum_of_squares_f1"}, {"func_name": "square", "is_parent": false, "frame_id": 4, "parent_frame_id_list": [], "encoded_locals": {"x": 10, "y": 100, "__return__": 100}, "ordered_varnames": ["x", "y", "__return__"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f4"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 10, "event": "step_line", "func_name": "sum_of_squares", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10, "a": 25, "b": 4, "c": 100}, "ordered_varnames": ["x", "y", "z", "a", "b", "c"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sum_of_squares_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 10, "event": "return", "func_name": "sum_of_squares", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c"], "stack_to_render": [{"func_name": "sum_of_squares", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": -5, "y": 2, "z": 10, "a": 25, "b": 4, "c": 100, "__return__": 129}, "ordered_varnames": ["x", "y", "z", "a", "b", "c", "__return__"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sum_of_squares_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 16, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10, "result": 129}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c", "result"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": ""}, {"line": 16, "event": "return", "func_name": "<module>", "globals": {"square": ["REF", 1], "sum_of_squares": ["REF", 2], "a": -5, "b": 2, "c": 10, "result": 129}, "ordered_globals": ["square", "sum_of_squares", "a", "b", "c", "result"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null], "2": ["FUNCTION", "sum_of_squares(x, y, z)", null]}, "stdout": "129\n"}]}
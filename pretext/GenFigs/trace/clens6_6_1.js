if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["fopp_2_clens6_6_1"] = {"code": "nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\naccum = 0\nfor w in nums:\n   accum = accum + w\nprint(accum)\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1]}, "ordered_globals": ["nums"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 0}, "ordered_globals": ["nums", "accum"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 0, "w": 1}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 1, "w": 1}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 1, "w": 2}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 3, "w": 2}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 3, "w": 3}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 6, "w": 3}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 6, "w": 4}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 10, "w": 4}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 10, "w": 5}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 15, "w": 5}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 15, "w": 6}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 21, "w": 6}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 21, "w": 7}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 28, "w": 7}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 28, "w": 8}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 36, "w": 8}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 36, "w": 9}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 45, "w": 9}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 45, "w": 10}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 55, "w": 10}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 55, "w": 10}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": ""}, {"line": 5, "event": "return", "func_name": "<module>", "globals": {"nums": ["REF", 1], "accum": 55, "w": 10}, "ordered_globals": ["nums", "accum", "w"], "stack_to_render": [], "heap": {"1": ["LIST", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}, "stdout": "55\n"}]}
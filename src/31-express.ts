// this file is related to the tsconfig.json topic "installing external library types"
// 09 HOW TO INCLUDE EXTERNAL TYPES IN THE COMPILATION PROCESS 

import { Request, Response } from "express";

let req: Request;

/// autocompletion now works
// req.
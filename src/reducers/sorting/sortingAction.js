import { createAction } from "@reduxjs/toolkit";

//payload передается под капотом - https://www.coderdoc.ru/start/34_redux/06_toolkit/6_3_action.php
export const sorting = createAction('SET_SORTING');
export default sorting;
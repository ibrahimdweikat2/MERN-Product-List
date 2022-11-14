import express from 'express';

import {createData,getData,getDataBySearch} from '../controller/data.js';

const router =express.Router();
router.get('/home',getData);
router.get('/home/search',getDataBySearch);
router.post('/',createData);


export default router;
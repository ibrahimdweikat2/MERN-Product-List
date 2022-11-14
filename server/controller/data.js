import mongoose from 'mongoose';
import dataSchema from '../model/data.js';



export const getData=async (req,res)=>{

    try {
        const data=await dataSchema.find();
        res.status(200).json({data});
    } catch (error) {
        res.status(404).send(error);
    }

}

export const getDataBySearch=async (req, res) => {
    const {search,brand}=req.query;
    try {
        const regSearch= new RegExp(search,'i');
        const data=await dataSchema.find({$or:[{name:regSearch},{brand}]});
        res.json({data});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createData= async (req,res)=>{
    const {name,description,image_url,brand} =req.body;
    const newData= new dataSchema({name,description,image_url,brand});
    try {
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
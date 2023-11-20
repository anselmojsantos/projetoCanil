import {Response, Request} from 'express';
import { Pet } from '../models/pets';
import { activeMenuOj } from './helpers/activeMenu';

export const search = (req:Request, res:Response)=>{
    let query:string = req.query.q as string;
    if(!query){
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(query);
    
    res.render('pages/pages',{
        menu:activeMenuOj(''),
        list,
        query
    });
}
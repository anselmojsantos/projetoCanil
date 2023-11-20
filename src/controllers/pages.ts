import {Response, Request} from 'express';
import { activeMenuOj } from './helpers/activeMenu';
import { Pet } from '../models/pets';

export const home = (req:Request, res:Response)=>{
    let list = Pet.getAll();
    res.render('pages/pages',{
        menu: activeMenuOj('all'),
        banner:{
            title: "Todos os animais",
            background:"allanimals.jpg"
        },
        list
    });
}

export const dogs = (req:Request, res:Response)=>{
    let list = Pet.getFromType('dog');
    res.render('pages/pages',{
        menu: activeMenuOj('dog'),
        banner:{
            title: "Cachorros",
            background:"banner_dog.jpg"
        },
        list
    });
}
export const cats = (req:Request, res:Response)=>{
    let list = Pet.getFromType('cat');
    res.render('pages/pages',{
        menu: activeMenuOj('cat'),
        banner:{
            title: "Gatos",
            background:"banner_cat.jpg"
        },
        list
    });
}
export const fishies = (req:Request, res:Response)=>{
    let list = Pet.getFromType('fish');
    res.render('pages/pages',{
        menu: activeMenuOj('fish'),
        banner:{
            title: "Peixes",
            background:"banner_fish.jpg"
        },
        list
    });
}
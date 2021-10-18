import { createSlice } from "@reduxjs/toolkit";
import json1 from "json/CONTENTLISTINGPAGE-PAGE1.json";
import json2 from "json/CONTENTLISTINGPAGE-PAGE2.json";
import json3 from "json/CONTENTLISTINGPAGE-PAGE3.json";

const obj1=JSON.stringify(json1)
const initialState = {
 list:JSON.parse(obj1)
};

export const imageSlice = createSlice({
  name: "image",
  initialState,

  reducers: {
    search: (state, action) => {

     let tmplist = JSON.parse(JSON.stringify(state.list));
     if(tmplist.page["content-items"].content.length==0)
        tmplist=initialState.list
      const  filtered =  tmplist.page["content-items"].content.filter(x => x.name.toLowerCase().includes(action.payload.toLowerCase()))
      tmplist.page["content-items"].content=filtered;
      console.log('filtered',filtered)
      if(action.payload==='')
        state.list=initialState.list
      else
      state.list=tmplist;
    },
    addcontent: (state, action) => {
     
      const tmplist = JSON.parse(JSON.stringify(state.list));
      if(tmplist.page["page-num-requested"]=='1')
      {
         tmplist.page["content-items"].content.push(...json2.page["content-items"].content)
         tmplist.page["page-num-requested"]='2'

         if(action.payload!='')
            {
              const  filtered =  tmplist.page["content-items"].content.filter(x => x.name.toLowerCase().includes(action.payload.toLowerCase()))
              tmplist.page["content-items"].content=filtered;
            }
         state.list=tmplist;
      }
      else if(tmplist.page["page-num-requested"]=='2')
      {
         tmplist.page["content-items"].content.push(...json3.page["content-items"].content)
         tmplist.page["page-num-requested"]='3'
         if(action.payload!='')
         {
           const  filtered =  tmplist.page["content-items"].content.filter(x => x.name.toLowerCase().includes(action.payload.toLowerCase()))
           tmplist.page["content-items"].content=filtered;
         }
         state.list=tmplist;
      }
      
    },
  },


});

export const imageActions = imageSlice.actions;

export default imageSlice.reducer;

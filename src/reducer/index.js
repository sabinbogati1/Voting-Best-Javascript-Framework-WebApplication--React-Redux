const initialState={
    angular:0,
    react:0,
    vuejs:0
}


export default (state=initialState,action) =>{

    switch(action.type){
        case "VOTE_ANGULAR":
        console.log("Angular js  voted....");
         return Object.assign({},state,{
             angular:state.angular+1

         })


         case "VOTE_REACT":
         console.log("React js  voted....");
         return Object.assign({},state,{
             angular:state.react+1

         })

         case "VOTE_VUEJS":
         console.log("Vue js  voted....");
         return Object.assign({},state,{
             angular:state.vuejs+1

         })

         default:
         return state
    }



}
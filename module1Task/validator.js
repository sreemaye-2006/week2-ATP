
                      // 1. Validate task title (not empty, min 3 cha
                      // 
                       function validateTitle(title) {
                        // Your code here
                        if(!title)
                        {
                            return "title required"
                        }
                        if(title.length<3)
                        {
                            return "min 3char"
                        }return "title is valid"
                      }
                      function validatePriority(priority)
                      {
                        const priorites=["low","medium","high"]
                        let result=priorites.includes(priority)
if(result===false)
{
  return "invalid priority"

} return true           
          }
                      function dueDate(duedate)
                      {
                        return "12|04|2026"
 }
  export{validateTitle,validatePriority,dueDate}
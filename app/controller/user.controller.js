const deelwith=require("../helpper/dealWithJson")
const fileName_tasks="model.task/tasks.json"
class task{
        static all =(req,res)=>{
                const all_tasks=deelwith.readJsonData(fileName_tasks)
                res.render("all",{
                   PageTitle:"ALL TASKS",
                   all_tasks,
                  hasData:all_tasks.length

                })
        }
        static add = (req,res)=>{
                res.render("add",{
                PageTitle:"Add task"})
        }
        static addlogic= (req,res)=>{
                const all_tasks= deelwith.readJsonData(fileName_tasks)
                const new_task ={id:Date.now(),...req.query}
                all_tasks.push(new_task)
                deelwith.writeJsonData(fileName_tasks,all_tasks)
                res.redirect("/")
        }
        static singletask=(req,res)=>{
                
                const id = req.params.id
                const allTasks=deelwith.readJsonData(fileName_tasks)
                const Task = allTasks.find(u=> u.id == id)
                        res.render("singletask", {
                            pageTitle:"Single Data",
                        Task
                        })
                    
        }
        static deletall= (req,res)=>{
                deelwith.writeJsonData(fileName_tasks,[])
                res.redirect("/")
        }
        static deltask = (req,res)=>{
                const id = req.params.id
                let allTasks=deelwith.readJsonData(fileName_tasks)
                allTasks=allTasks.filter(u=> u.id != id)
                deelwith.writeJsonData(fileName_tasks,allTasks)
                res.redirect("/")
      
      
        }
        static edtit =(req,res)=>{
                const id = req.params.id
                let allTasks=deelwith.readJsonData(fileName_tasks)
                const Task =allTasks.find(u=> u.id != id)
            
                res.render("edit",{
                        pageTitle:"Edite",
                        Task
                       

                })
                
        }
        static edtitlogic=(req,res)=>{
                const id = req.params.id
                const alltasks=deal.readJsonData(fileName_tasks)
                const index = alltasks.findIndex(u=> u.id == id)
                alltasks[index] = {id, ...req.query}
                deal.writeJsonData(fileName_tasks, alltasks)
                res.redirect(`/singletask/${id}`)
        }

}



module.exports = task


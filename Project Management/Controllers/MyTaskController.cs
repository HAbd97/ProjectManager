using Project_Management.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Project_Management.Controllers
{
    public class MyTaskController : ApiController
    {
        //Get /api/MyTask
        public HttpResponseMessage Get()
        {
            ProjectManagerEntities1 db = new ProjectManagerEntities1();

            var result = (from tsk in db.Task_tbl
                          join emp in db.Employee_tbl
                          on tsk.EmpId equals emp.EmpId
                          join proj in db.Project_tbl on tsk.ProjectId equals proj.ProjectId
                          select new CompleteTask
                          {
                              TaskName = tsk.TaskName,
                              ProjectName = proj.Project,
                              EstimatedHours = tsk.EstimatedHours,
                              ConsumedHours = tsk.ConsumedHours,
                              Deviation = tsk.Deviation,
                              Status = tsk.Status

                          }).ToList();
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        //Post /api/MyTask with id and status
        public HttpResponseMessage Post(int tid, int id,  int conHour, string status)
        {
            ProjectManagerEntities1 db = new ProjectManagerEntities1();
            //List<CompleteTask> result = new List<CompleteTask>();
            //result = (from tsk in db.Task_tbl
            //              join proj in db.Project_tbl on tsk.ProjectId equals proj.ProjectId
            //              where tsk.TaskId == id
            //              select new CompleteTask
            //              {
            //                  ConsumedHours = conHour,
            //                  EstimatedHours = tsk.EstimatedHours,
            //                  Deviation = tsk.EstimatedHours - conHour,
            //                  Status = status

            //              }).ToList();

            //List<Project_tbl> res = new List<Project_tbl>();
            //res = (from tsk in db.Task_tbl
            //      join proj in db.Project_tbl on tsk.ProjectId equals proj.ProjectId
            //      where tsk.TaskId == id
            //      select new Project_tbl
            //      {
            //          ActualHours = sum
            //      }).ToList();

            //var projdata = (from tsk in db.Task_tbl
            //                join proj in db.Project_tbl on tsk.ProjectId equals proj.ProjectId
            //                where tsk.TaskId == id
            //                select new CompleteTask
            //                {

            //                    ActualHours = sum


            //                }).ToList();
            //db.SaveChanges();
            decimal sum = 0;
            var result = db.Task_tbl.SingleOrDefault(b => b.ProjectId == id && b.TaskId == tid);
            var data = result.ConsumedHours;
            var estdata = result.EstimatedHours;
            var calDeviation = estdata - data;
            if (result != null)
            {
                result.ConsumedHours = conHour;
                result.Status = status;
                result.Deviation = calDeviation;
                
                db.SaveChanges();
            }
            var dt = db.Task_tbl.Where(a=> a.ProjectId == id).ToList();
            
            foreach (var item in dt)
            {
                sum = Convert.ToDecimal(sum + item.ConsumedHours);

            }
            var projresult = db.Project_tbl.FirstOrDefault(b => b.ProjectId == id);
            
           
            if (projresult != null)
            {
                projresult.ActualHours = sum;
               
                db.SaveChanges();
            }
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

    }
}



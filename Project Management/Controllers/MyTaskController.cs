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
    
    public HttpResponseMessage Put(int id)
    {
        ProjectManagerEntities1 db = new ProjectManagerEntities1();
            var result = db.Task_tbl.SingleOrDefault(b => b.TaskId == id);
            if (result != null)
            {
                result.Status = "Changed";
                db.SaveChanges();
            }
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

    }
}



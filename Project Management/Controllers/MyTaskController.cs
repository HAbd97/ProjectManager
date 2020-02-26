using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Project_Management.Models;

namespace Project_Management.Controllers
{
    public class MyTaskController : ApiController
    {
        ProjectManagerEntities db = new ProjectManagerEntities();
     public HttpResponseMessage Get()
        {
          
            var result = (from tsk in db.Task_tbl
             join emp in db.Employee_tbl
             on tsk.EmpId equals emp.EmpId join proj in db.Project_tbl on tsk.ProjectId equals proj.ProjectId
             select new CompleteTask
             {
                 TaskName = tsk.TaskName,
                 ProjectName = proj.Project,
                 EstimatedHours = tsk.EstimatedHours,
                 ConsumedHours = tsk.ConsumedHours,
                 Deviation=tsk.Deviation,
                 Status=tsk.Status

             }).ToList();
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }
    }
}

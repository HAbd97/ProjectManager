using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Project_Management.Models;

namespace Project_Management.Controllers
{
    public class DashBoardController : ApiController
    {
        ProjectManagerEntities db = new ProjectManagerEntities();
        public HttpResponseMessage Get()
        {
            var data = from res in db.Project_tbl select new { res.Project, res.EstimatedHours };
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }

        public HttpResponseMessage Get(string ProjctName)
        {
            var alldata = (from task in db.Task_tbl
                           join project in db.Project_tbl
                           on task.ProjectId equals project.ProjectId
                           join user in db.Employee_tbl on task.EmpId equals user.EmpId where project.Project == ProjctName
                           select new AllProjects
                           {
                               TaskName = task.TaskName,
                               Description = task.Description,
                               EmpName = user.EmpName,
                               ConsumedHours = task.ConsumedHours,
                               EstimatedHours = task.EstimatedHours,
                                Derivation = task.Deviation,
                               Date = task.TaskDate,
                               Status = task.Status

                           }).ToList();
            return Request.CreateResponse(HttpStatusCode.OK, alldata);

        }


    }
}

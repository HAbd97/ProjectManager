using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Project_Management.Models;

namespace Project_Management.Controllers
{
    public class TaskController : ApiController
    {
        ProjectManagerEntities1 db = new ProjectManagerEntities1();

        public void Post(Task_tbl dtask)
        {
            if (ModelState.IsValid)
            {
                db.Task_tbl.Add(dtask);
                db.SaveChanges();
            }
        }

        public HttpResponseMessage Get()
        {
            var data = db.Task_tbl.ToList();
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }

        public HttpResponseMessage Get(int id)
        {
            var data = db.Task_tbl.Find(id);
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }

        public HttpResponseMessage Get(string proj)
        {
            List<SearchModel> src = new List<SearchModel>();
            src = (from tsk in db.Task_tbl
                   join emp in db.Employee_tbl on tsk.EmpId equals emp.EmpId
                   join prj in db.Project_tbl on tsk.ProjectId equals prj.ProjectId
                   select new SearchModel
                   {
                       TaskName = tsk.TaskName,
                       EmployeeName = emp.EmpName,
                       ProjectName = prj.Project,
                       EstimatedHours = tsk.EstimatedHours,
                       ConsumedHours = tsk.ConsumedHours,
                       Deviation = tsk.Deviation,
                       Status = tsk.Status,
                       Date = tsk.TaskDate
                   }).ToList();
            return Request.CreateResponse(HttpStatusCode.OK, src);
        }
    }
}

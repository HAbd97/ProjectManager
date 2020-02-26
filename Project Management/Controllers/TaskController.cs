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
        //Model Object Creation
        ProjectManagerEntities1 db = new ProjectManagerEntities1();

        //Adding Task
        public void Post(Task_tbl dtask)
        {
            if (ModelState.IsValid)
            {
                db.Task_tbl.Add(dtask);
                db.SaveChanges();
            }
        }

        //Get All Task data
        public HttpResponseMessage Get()
        {
            var data = db.Task_tbl.ToList();
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }

        //Get Task data by Id
        public HttpResponseMessage Get(int id)
        {
            var data = db.Task_tbl.Find(id);
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }

        //Search tasks by Project Name
        public HttpResponseMessage Get(string projName)
        {
            List<SearchModel> src = new List<SearchModel>();
            src = (from tsk in db.Task_tbl
                   join prj in db.Project_tbl on tsk.ProjectId equals prj.ProjectId
                   join emp in db.Employee_tbl on tsk.EmpId equals emp.EmpId
                   where projName == prj.Project 
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

        //Search tasks by From-To dates 
        public HttpResponseMessage Get(DateTime fromDate, DateTime toDate)
        {
            List<SearchModel> src = new List<SearchModel>();
            src = (from tsk in db.Task_tbl
                   join prj in db.Project_tbl on tsk.ProjectId equals prj.ProjectId
                   join emp in db.Employee_tbl on tsk.EmpId equals emp.EmpId
                   where tsk.TaskDate >= fromDate && tsk.TaskDate <= toDate
                   select new SearchModel {
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

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
        ProjectManagerEntities db = new ProjectManagerEntities();

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
            SearchModel src = new SearchModel();

            var data = db.Project_tbl.Where(a => a.Project == proj).ToList().FirstOrDefault();
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Project_Management.Controllers
{
    public class testcontroller : ApiController
    {
        

        // GET api/<controller>/5
        [HttpGet]
        public string testfunction(int id)
        {
            return id.ToString();
        }

     
    }
}
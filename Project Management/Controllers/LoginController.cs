using Project_Management.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Project_Management.Controllers
{
    public class LoginController : ApiController
    {
        //[EnableCors(origins: "", headers: "*", methods: "*")]
        ProjectManagerEntities1 db = new ProjectManagerEntities1();
    
        public HttpResponseMessage Get(string username, string password)
        {
            var passlength = password.Length;
            if (passlength == 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, "enter password");
            }
            else if (passlength < 8)
            {
                return Request.CreateResponse(HttpStatusCode.OK, "weak password");
            }
            else if (passlength > 12)
            {
                return Request.CreateResponse(HttpStatusCode.OK, "password too long");
            }
           
            else
            {
                var input = password;
                var hasNumber = new Regex(@"[0-9]+"); 
                var hasUpperChar = new Regex(@"[A-Z]+");
                var hasLowerChar = new Regex(@"[a-z]+");
                var hasMinimum8Chars = new Regex(@".{8,12}");
                var specialcharac = new Regex("^*$");
                var isValidated = hasNumber.IsMatch(input) && hasUpperChar.IsMatch(input) && hasMinimum8Chars.IsMatch(input) && specialcharac.IsMatch(input) && hasLowerChar.IsMatch(input);
                if (isValidated)
                {
                    var data = from res in db.Employee_tbl
                               where res.Username == username && res.Password == password
                               select new UserDetails
                               {
                                   userId=res.EmpId,
                                   Username = res.Username,
                                   Password = res.Password
                               };


                    return Request.CreateResponse(HttpStatusCode.OK, data);
                }
                return Request.CreateResponse(HttpStatusCode.OK,"Login Failed");
            }

            
            
       }
    }
}

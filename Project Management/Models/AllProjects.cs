using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project_Management.Models
{
    public class AllProjects
    {
        public string TaskName { get; set; }
        public string Description { get; set; }
        public string EmpName { get; set; }
        public decimal? ConsumedHours { get; set; }
        public decimal EstimatedHours { get; set; }
        public decimal? Deviation { get; set; }
        public DateTime  Date { get; set; }
       
        public string Status { get; set; }

    }
}
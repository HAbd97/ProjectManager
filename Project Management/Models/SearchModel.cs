using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project_Management.Models
{
    public class SearchModel
    {
        public string TaskName { get; set; }
        public string EmployeeName { get; set; }
        public int ProjectName { get; set; }
        public decimal EstimatedHours { get; set; }
        public decimal? ConsumedHours { get; set; }
        public decimal? Deviation { get; set; }
        public string Status { get; set; }
        public DateTime Date { get; set; }
    }
}
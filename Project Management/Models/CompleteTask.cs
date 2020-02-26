using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project_Management.Models
{
    public class CompleteTask
    {
            public string TaskName { get; set; }
            public string ProjectName { get; set; }
            public decimal EstimatedHours { get; set; }
            public decimal? ConsumedHours { get; set; }
            public decimal? Deviation { get; set; }
            public string Status { get; set; }
        
    }
}
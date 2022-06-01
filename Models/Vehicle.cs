using System;
using System.Collections.Generic;

namespace parking_project.Models
{
    public partial class Vehicle
    {
        public int Id { get; set; }
        public string Color { get; set; } = null!;
        public string CarBrand { get; set; } = null!;
        public string CarModel { get; set; } = null!;
    }
}

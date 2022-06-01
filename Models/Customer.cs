﻿using System;
using System.Collections.Generic;

namespace parking_project.Models
{
    public partial class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Lastname { get; set; }
        public string Password { get; set; } = null!;
        public string Email { get; set; } = null!;
        public int Phone { get; set; }
    }
}

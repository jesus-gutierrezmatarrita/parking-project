using System;
using System.Collections.Generic;

namespace parking_project.Models
{
    public partial class staff
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Lastname { get; set; }
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;
        public int Role { get; set; }
    }
}

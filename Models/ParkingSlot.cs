using System;
using System.Collections.Generic;

namespace parking_project.Models
{
    public partial class ParkingSlot
    {
        public int SlotId { get; set; }
        public string State { get; set; } = null!;
        public string Type { get; set; } = null!;
        public int ParkingId { get; set; }
        public double? Price { get; set; }

        public virtual Parking Parking { get; set; } = null!;
    }
}

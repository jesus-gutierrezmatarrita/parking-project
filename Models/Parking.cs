using System;
using System.Collections.Generic;

namespace parking_project.Models
{
    public partial class Parking
    {

        public Parking()
        {
            ParkingSlots = new HashSet<ParkingSlot>();
        }

        public Parking(int id, string? name, string location, int capacity)
        {
            Id = id;
            Name = name;
            Location = location;
            Capacity = capacity;
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Location { get; set; } = null!;
        public int Capacity { get; set; }

        public virtual ICollection<ParkingSlot> ParkingSlots { get; set; }

    }
}

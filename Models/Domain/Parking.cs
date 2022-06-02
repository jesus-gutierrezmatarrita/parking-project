namespace parking_project.Models.Domain
{
    public class Parking
    {
        private int id;
        private string name;
        private string location;
        private int capacity;

        public Parking()
        {

        }

        public Parking(int id, string name, string location, int capacity)
        {
            this.Id = id;
            this.Name = name;
            this.Location = location;
            this.Capacity = capacity;
        }

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string Location { get => location; set => location = value; }
        public int Capacity { get => capacity; set => capacity = value; }
    }
}

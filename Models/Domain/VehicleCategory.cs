namespace parking_project.Models.Domain
{
    public class VehicleCategory
    {
        private int id;
        private string name;

        public VehicleCategory()
        {
        }

        public VehicleCategory(int id, string name)
        {
            this.Id = id;
            this.Name = name;
        }

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
    }
}

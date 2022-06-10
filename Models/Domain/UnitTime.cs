namespace parking_project.Models.Domain
{
    public class UnitTime
    {
        private int id;
        private string name;

        public UnitTime()
        {
        }

        public UnitTime(int id, string name)
        {
            this.id = id;
            this.name = name;
        }

        public string Name { get => name; set => name = value; }
        public int Id { get => id; set => id = value; }
    }
}

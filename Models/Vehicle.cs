namespace parking_project.Models
{
    public class Vehicle
    {
        private int id;
        private string color;
        private string carBrand;
        private string carModel;

        public Vehicle()
        {
        }

        public Vehicle(int id, string color, string carBrand, string carModel)
        {
            this.Id = id;
            this.Color = color;
            this.CarBrand = carBrand;
            this.CarModel = carModel;
        }

        public int Id { get => id; set => id = value; }
        public string Color { get => color; set => color = value; }
        public string CarBrand { get => carBrand; set => carBrand = value; }
        public string CarModel { get => carModel; set => carModel = value; }
    }
}

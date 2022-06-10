namespace parking_project.Models.Data
{
    public class FareDAO
    {
        private readonly IConfiguration _configuration;
        string connectionString;



        public FareDAO(IConfiguration configuration)
        {
            _configuration = configuration;
            connectionString = _configuration.GetConnectionString("DefaultConnection");
        }




    }
}

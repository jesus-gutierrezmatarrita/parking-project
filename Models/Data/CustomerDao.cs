using System.Data.SqlClient;
using parking_project.Models;
namespace parking_project.Models.Data
{
    public class CustomerDao
    {
        private readonly IConfiguration _configuration;
        string connectionString;

      

        public CustomerDao(IConfiguration configuration)
        {
            _configuration = configuration;
            connectionString = _configuration.GetConnectionString("DefaultConnection");
        }

        public int Insert(Customer customer)
        {
            int resultToReturn = 0;//it will save 1 or 0 depending on the result of insertion
            Exception? exception = new Exception();
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {


                    connection.Open();
                    SqlCommand command = new SqlCommand("InsertCustomer", connection);
                    command.CommandType = System.Data.CommandType.StoredProcedure;

                    command.Parameters.AddWithValue("@Name", customer.Name);
                    command.Parameters.AddWithValue("@Email", customer.Lastname);
                    command.Parameters.AddWithValue("@Password", customer.Password);
                    command.Parameters.AddWithValue("@Email",customer.Email );
                    command.Parameters.AddWithValue("@Phone", customer.Phone);

                    resultToReturn = command.ExecuteNonQuery();
                    connection.Close();

                }
            }
            catch (Exception ex)
            {
                exception = ex;
                throw exception;
            }


            return resultToReturn;

        }
        public List<Customer> Get()
        {

            List<Customer> customers = new List<Customer>();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {

                connection.Open();
                SqlCommand command = new SqlCommand("GetAllCustomer", connection);
                command.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader sqlDataReader = command.ExecuteReader();
                while (sqlDataReader.Read())
                {
                    
                    customers.Add(new Customer
                    {
                        Id = Convert.ToInt32(sqlDataReader["Id"]),
                        Name = sqlDataReader["Name"].ToString(),
                        Lastname = sqlDataReader["Lastname"].ToString(),
                        Email = sqlDataReader["Email"].ToString(),
                        Phone = Convert.ToInt32(sqlDataReader["Phone"].ToString()),
                       
                    });

                }

                connection.Close();

                return customers;

            }
            /*public int Delete(int Id)
            {
                int resultToReturn;
                Exception? exception = new Exception();
                try
                {
                    using (SqlConnection connection = new SqlConnection(connectionString))
                    {
                        connection.Open();
                        SqlCommand command = new SqlCommand("DeleteStudent", connection);
                        command.CommandType = System.Data.CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@Id", Id);
                        resultToReturn = command.ExecuteNonQuery();
                        connection.Close();
                    }
                }
                catch (Exception ex)
                {
                    exception = ex;
                    throw exception;
                }
                return resultToReturn;
            }*/

        }



    }
}

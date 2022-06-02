using System;
using System.Collections.Generic;

namespace parking_project.Models
{
    public partial class Customer
    {
<<<<<<< HEAD
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Lastname { get; set; }
        public string Password { get; set; } = null!;
        public string Email { get; set; } = null!;
        public int Phone { get; set; }
=======
        private int id;
        private string name;
        private string lastname;
        private string password;
        private Vehicle vehicle;
        private string email;
        private int phone;

        public Customer()
        {
            
        }

        public Customer(int id, string name, string lastname, string password,  string email, int phone)
        {
            this.Id = id;
            this.Name = name;
            this.Lastname = lastname;
            this.Password = password;
            this.Email = email;
            this.Phone = phone;
        }

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string Lastname { get => lastname; set => lastname = value; }
        public string Password { get => password; set => password = value; }
        public Vehicle Vehicle { get => vehicle; set => vehicle = value; }
        public string Email { get => email; set => email = value; }
        public int Phone { get => phone; set => phone = value; }
>>>>>>> 71adbe92b488b2c6cb57f40d40c059f72abe6cd0
    }
}

using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace parking_project.Models
{
    public partial class ProjectParkingJARSContext : DbContext
    {
        public ProjectParkingJARSContext()
        {
        }

        public ProjectParkingJARSContext(DbContextOptions<ProjectParkingJARSContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customers { get; set; } = null!;
        public virtual DbSet<Parking> Parkings { get; set; } = null!;
        public virtual DbSet<ParkingSlot> ParkingSlots { get; set; } = null!;
        public virtual DbSet<Vehicle> Vehicles { get; set; } = null!;
        public virtual DbSet<staff> staff { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=163.178.173.148;Initial Catalog=ProjectParkingJARS;User ID=lenguajes;Password=lg.2022zx;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("Customer");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Lastname).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.Password).HasMaxLength(50);
            });

<<<<<<< HEAD
            modelBuilder.Entity<Parking>(entity =>
            {
                entity.ToTable("Parking");

                entity.Property(e => e.Location).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            modelBuilder.Entity<ParkingSlot>(entity =>
            {
                entity.HasKey(e => e.SlotId)
                    .HasName("pk_parkingslot");

                entity.Property(e => e.SlotId)
                    .ValueGeneratedNever()
                    .HasColumnName("slotId");

                entity.Property(e => e.ParkingId).HasColumnName("parkingId");

                entity.Property(e => e.Price)
                    .HasColumnName("price")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.State)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .HasColumnName("state")
                    .IsFixedLength();

                entity.Property(e => e.Type)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .HasColumnName("type")
                    .IsFixedLength();

                entity.HasOne(d => d.Parking)
                    .WithMany(p => p.ParkingSlots)
                    .HasForeignKey(d => d.ParkingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_parkingslot_parking");
            });

            modelBuilder.Entity<Vehicle>(entity =>
            {
                entity.ToTable("Vehicle");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.CarBrand)
                    .HasMaxLength(20)
                    .HasColumnName("carBrand")
                    .IsFixedLength();

                entity.Property(e => e.CarModel)
                    .HasMaxLength(20)
                    .HasColumnName("carModel")
                    .IsFixedLength();

                entity.Property(e => e.Color)
                    .HasMaxLength(20)
                    .HasColumnName("color")
                    .IsFixedLength();
=======
                //entity.Property(e => e.Username).HasMaxLength(50);
>>>>>>> 71adbe92b488b2c6cb57f40d40c059f72abe6cd0
            });

            modelBuilder.Entity<staff>(entity =>
            {
                entity.ToTable("Staff");

                entity.Property(e => e.Lastname).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.Username).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

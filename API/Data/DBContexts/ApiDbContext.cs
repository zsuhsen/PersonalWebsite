using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Data.DBContexts
{
    public class ApiDbContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public ApiDbContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public DbSet<JobEntity>? Jobs { get; set; }
        public DbSet<CompanyEntity>? Companys { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sql server with connection string from app settings
            options.UseSqlServer(Configuration.GetConnectionString("ConnectionString"));
        }
    }
}

using Microsoft.EntityFrameworkCore;
using nercoreEntityPersona.Models;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Persona> Persona { get; set; }
    public DbSet<Genero> Genero { get; set; }
}

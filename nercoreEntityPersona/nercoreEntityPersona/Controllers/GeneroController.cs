using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using nercoreEntityPersona.Models;

[Route("api/[controller]")]
[ApiController]
public class GeneroController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public GeneroController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Genero>>> GetGeneros()
    {
        return await _context.Genero.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Genero>> GetGenero(int id)
    {
        var genero = await _context.Genero.FindAsync(id);

        if (genero == null)
        {
            return NotFound();
        }

        return genero;
    }

    [HttpPost]
    public async Task<ActionResult<Genero>> PostGenero(Genero genero)
    {
        _context.Genero.Add(genero);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetGenero", new { id = genero.Id }, genero);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutGenero(int id, Genero genero)
    {
        if (id != genero.Id)
        {
            return BadRequest();
        }

        _context.Entry(genero).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!GeneroExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteGenero(int id)
    {
        var genero = await _context.Genero.FindAsync(id);
        if (genero == null)
        {
            return NotFound();
        }

        _context.Genero.Remove(genero);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool GeneroExists(int id)
    {
        return _context.Genero.Any(e => e.Id == id);
    }
}

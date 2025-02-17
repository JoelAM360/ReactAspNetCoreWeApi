using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProAtividade.Api.Models;

namespace ProAtividade.Api.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Atividade> Atividades { get; set; } 
       
        public DataContext(DbContextOptions<DataContext> options) : base(options){ }
    }
}
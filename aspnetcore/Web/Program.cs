using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using DotNetEnv;
using NSwag;


var builder = WebApplication.CreateBuilder(args);
Env.Load();

var connectionString = @"Host=" + Environment.GetEnvironmentVariable("POSTGRES_HOST") + ";Username=" + Environment.GetEnvironmentVariable("POSTGRES_USER") + ";Password=" + Environment.GetEnvironmentVariable("POSTGRES_PASSWORD") + ";Database=" + Environment.GetEnvironmentVariable("POSTGRES_DB");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString));

// https://aka.ms/aspnet/openapi
builder.Services.AddControllers();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
app.UseOpenApi();
app.MapControllers();
app.Run();

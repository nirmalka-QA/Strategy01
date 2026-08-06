using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace BeStrategy.Infrastructure;

public static class InfrastructureServiceCollectionExtensions
{
    public static IServiceCollection AddInfrastructureServices(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        // Register infrastructure services here (e.g. DbContext, repositories, external clients)
        return services;
    }
}

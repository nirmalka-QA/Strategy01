# BE-Strategy — Backend API

ASP.NET Core 10 Web API following Clean Architecture principles.

## Tech Stack

| Layer | Choice | Version |
|---|---|---|
| Runtime | .NET | 10.0.302 |
| Framework | ASP.NET Core Web API | 10.0 |
| Logging | Serilog | 10.0.0 |
| OpenAPI / Swagger UI | Swashbuckle.AspNetCore | 10.2.3 |
| Validation | FluentValidation | 11.3.1 |
| Auth | JWT Bearer | 10.0.10 |
| Test framework | xUnit + Moq | 2.9.3 / 4.20.72 |
| Test SDK | Microsoft.NET.Test.Sdk | 18.8.1 |
| Coverage | coverlet.collector | 10.0.1 |

## Project Structure

```
backend/
├── BE-Strategy.slnx                  # Solution (new .NET 10 XML format)
├── global.json                       # SDK version pin (10.0.302, roll-forward: latestPatch)
├── Directory.Build.props             # Shared build settings (nullable, warnings-as-errors, etc.)
├── .editorconfig                     # Code-style rules for all editors
├── src/
│   ├── BeStrategy.Api/               # Entry point: controllers, middleware, DI wiring
│   │   ├── Controllers/
│   │   ├── Extensions/               # IServiceCollection extensions
│   │   ├── Middleware/               # ExceptionHandlingMiddleware
│   │   └── Program.cs
│   ├── BeStrategy.Application/       # Use cases, interfaces, DTOs, custom exceptions
│   │   └── Common/
│   │       ├── Exceptions/           # NotFoundException, ValidationException
│   │       └── Interfaces/           # IRepository<T>, IUnitOfWork
│   ├── BeStrategy.Domain/            # Entities, value objects, domain events
│   │   └── Common/
│   │       └── BaseEntity.cs
│   └── BeStrategy.Infrastructure/    # DB, external services, repository implementations
└── tests/
    ├── BeStrategy.Api.Tests/
    └── BeStrategy.Application.Tests/
```

### Dependency direction (Clean Architecture)

```
Api → Application ← Infrastructure
Api → Infrastructure
Application → Domain
Infrastructure → Domain
```

## Prerequisites

- .NET SDK 10.0.x (`global.json` locks the patch via `latestPatch` roll-forward)

Install on Linux/macOS without root:

```bash
curl -sSL https://dot.net/v1/dotnet-install.sh | bash -s -- --channel LTS
export PATH="$HOME/.dotnet:$PATH"
```

## Running locally

```bash
cd backend/src/BeStrategy.Api

# Set the JWT key (never commit real secrets)
dotnet user-secrets set "Jwt:Key" "your-256-bit-or-longer-secret"

dotnet run
# API:      http://localhost:5000
# Swagger:  http://localhost:5000 (redirects to Swagger UI in Development)
# Health:   http://localhost:5000/health
```

## Build & Test

```bash
# From backend/
dotnet build BE-Strategy.slnx          # Full solution build
dotnet test  BE-Strategy.slnx          # All test projects
dotnet test  BE-Strategy.slnx \
  --collect:"XPlat Code Coverage"      # With coverage (Coverlet)
```

## Configuration

| Key | Description | Default |
|---|---|---|
| `Jwt:Issuer` | JWT token issuer | `be-strategy-api` |
| `Jwt:Audience` | JWT token audience | `be-strategy-clients` |
| `Jwt:Key` | **Secret signing key — set via user-secrets or env var** | placeholder (invalid) |

Env-var override pattern: `Jwt__Key=<value>` (double underscore = section separator).

## Security Audit

Audit run at scaffold time with:

```bash
dotnet list package --vulnerable --include-transitive
```

> Result (2026-08-06, SDK 10.0.302): no known vulnerabilities found in any direct or transitive package across all six projects.

Re-run whenever dependencies are updated.

## Adding a Feature

1. Define your entity in `BeStrategy.Domain/Entities/`.
2. Add a repository interface in `BeStrategy.Application/Common/Interfaces/`.
3. Implement the repository in `BeStrategy.Infrastructure/Persistence/`.
4. Write a use-case handler in `BeStrategy.Application/Features/<Feature>/`.
5. Add a controller action in `BeStrategy.Api/Controllers/`.
6. Register any new services in the relevant `DependencyInjection.cs`.

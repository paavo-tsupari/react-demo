FROM mcr.microsoft.com/dotnet/sdk:10.0 as build

WORKDIR /app 

COPY Common       ./Common
COPY Domain       ./Domain
COPY Web          ./Web
COPY DataAccess   ./DataAccess
COPY backend.slnx ./

RUN dotnet publish ./Web/Web.csproj -o /build

FROM mcr.microsoft.com/dotnet/aspnet:10.0 as run 

WORKDIR /app

COPY --from=build /build . 

EXPOSE 8080

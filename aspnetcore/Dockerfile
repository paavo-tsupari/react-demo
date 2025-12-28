FROM mcr.microsoft.com/dotnet/sdk:10.0 as build

WORKDIR /app 

COPY Common DataAccess Domain Web  ./

RUN dotnet publish ./Web/Web.csproj

FROM mcr.microsoft.com/dotnet/aspnet:10.0 as run 

WORKDIR /app

COPY --from=build /app/publish . 

EXPOSE 8080
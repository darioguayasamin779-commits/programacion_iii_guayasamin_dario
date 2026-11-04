// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
    if (req.url ==='/'){
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Bienvenido a la Academia IDIOMIA!\n');
    }
    else if (req.url === '/cursos') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Cursos</h1><p>Ingles, Frances y Aleman con los docentes Dario, Tyron y Christian.</p>');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Pagina no encontrada</h1><p>La pagina que buscas no existe en IDIOMIA.</p>');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor IDIOMIA escuchando en 127.0.0.1:3000');
});

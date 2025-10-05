


---

## 1. Generalización simbólica  
Las generalizaciones simbólicas son las reglas escritas o formales del lenguaje, que determinan cómo se deben estructurar y ejecutar los programas.

En TypeScript, cuando se lo restringe al paradigma estructurado, estas reglas incluyen:

- **Ejecución secuencial:**  
  El código se ejecuta de manera ordenada, línea por línea, sin saltos arbitrarios.
  ```ts
  let x: number = 10;
  let y: number = 5;
  let suma = x + y;
  console.log(suma);
  ```

- **Estructuras de control:**  
  - *Selección:* `if`, `else if`, `else`, `switch`.  
  - *Iteración:* `for`, `while`, `do-while`.  
  - *Bloques delimitados por `{ }` para definir el alcance de las instrucciones.*
 

- **Uso de funciones como procedimientos:**  
  Se organizan las tareas en funciones que reciben parámetros y devuelven resultados.
  ```ts
  function calcularPromedio(a: number, b: number, c: number): number {
    return (a + b + c) / 3;
  }
  ```

- **Tipado estático:**  
  El lenguaje requiere declarar tipos explícitos (`number`, `string`, `boolean`, etc.) y verifica su coherencia en tiempo de compilación.

- **Reglas de alcance y ámbito:**  
  Variables declaradas con `let` o `const` tienen alcance de bloque, reduciendo los efectos colaterales.

- **Ausencia de rasgos no estructurados:**  
  En este enfoque no se utilizan objetos, clases ni herencia, manteniendo un estilo puramente funcional y secuencial.



## 2. Creencias de los profesionales  
Las creencias de los profesionales se refieren a los valores y convicciones que los programadores sostienen sobre el lenguaje y sus ventajas frente a otros.

En el caso de TypeScript, las creencias más comunes son:

1. **Seguridad de tipos = código más confiable**  
   - El tipado estático permite detectar errores antes de ejecutar el programa.  
   - Se considera una mejora directa respecto a JavaScript.

2. **Mayor legibilidad y mantenibilidad**  
   - El código estructurado y tipado resulta más claro y fácil de mantener a largo plazo.

3. **Compatibilidad con JavaScript**  
   - Se valora poder mejorar un lenguaje ampliamente usado sin perder interoperabilidad con el ecosistema web.

4. **Escalabilidad en programas estructurados**  
   - Se cree que un diseño basado en funciones y módulos facilita la depuración, el testeo y el crecimiento del proyecto.

5. **Herramientas de desarrollo robustas**  
   - El soporte de autocompletado, documentación y detección de errores en editores como VS Code refuerza la productividad.





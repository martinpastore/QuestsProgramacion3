using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace patronDecorator
{
    public class Program
    {
        static void Main(string[] args)
        {
            Milanesa m1 = new BaseMilanesa();
            m1 = new PapasFritas(m1);
            m1 = new Napolitana(m1);

            Milanesa m2 = new BaseMilanesa();
            m2 = new Fugazzeta(m2);
            m2 = new Pure(m2);

            Milanesa m3 = new BaseMilanesa();
            m3 = new Ensalada(m3);

            var precio = m1.precio();
            precio = m2.precio();
            precio = m3.precio();

            Console.WriteLine("Tu Milanesa sale: " + precio);
            Console.ReadLine();
        }
    }
}

public abstract class Milanesa
{
    public abstract int precio();
}

public class PapasFritas : Milanesa
{
    private Milanesa m;

    public PapasFritas(Milanesa m)
    {
        this.m = m;
    }
    public override int precio()
    {
        return this.m.precio() + 30;
    }
}

public class Ensalada : Milanesa
{
    private Milanesa m;

    public Ensalada(Milanesa m)
    {
        this.m = m;
    }
    public override int precio()
    {
        return this.m.precio() + 15;
    }
}

public class Pure : Milanesa
{
    private Milanesa m;
    
    public Pure(Milanesa m)
    {
        this.m = m;
    }
    public override int precio()
    {
        return this.m.precio() + 25;
    }
}

public class Napolitana : Milanesa
{
    private Milanesa m;

    public Napolitana(Milanesa m)
    {
        this.m = m;
    }
    public override int precio()
    {
        return this.m.precio + 25;
    }
}

public class Fugazzeta : Milanesa
{
    private Milanesa m;

    public Fugazzeta(Milanesa m)
    {
        this.m = m;
    }
    public override int precio()
    {
        return this.m.precio + 27;
    }
}

public class BaseMilanesa : Milanesa
{
    public override int precio()
    {
        return 50;
    }
}






import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Resume from "./Resume";

describe("Resume", () => {
  it("renders the name heading with icon", () => {
    render(<Resume />);
    expect(
      screen.getByRole("heading", { name: /Rusty Roberts/ }),
    ).toBeInTheDocument();

    const icon = screen.getByAltText("Site icon");
    expect(icon).toHaveAttribute("src", "/icon.svg");
    expect(icon).toHaveStyle("width: 32px");
  });

  it("renders NavBar with Resume as active page", () => {
    render(<Resume />);
    expect(screen.getByText("[rhroberts.dev]")).toBeInTheDocument();
    const resumeLinks = screen.getAllByText("Resume");
    expect(resumeLinks.length).toBeGreaterThan(0);
  });

  it("renders Footer component", () => {
    render(<Resume />);
    expect(screen.getByText(/© 2022/)).toBeInTheDocument();
    expect(screen.getByText("Site source")).toBeInTheDocument();
  });

  it("renders contact information", () => {
    render(<Resume />);

    const emailLink = screen.getByRole("link", { name: "mail@rhroberts.dev" });
    expect(emailLink).toHaveAttribute("href", "mailto:mail@rhroberts.dev");

    const githubLink = screen.getByRole("link", {
      name: "github.com/rhroberts",
    });
    expect(githubLink).toHaveAttribute("href", "https://github.com/rhroberts");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders location information", () => {
    render(<Resume />);
    expect(
      screen.getByText("Currently based in Seattle, WA."),
    ).toBeInTheDocument();
  });

  describe("Employment section", () => {
    it("renders employment heading", () => {
      render(<Resume />);
      expect(
        screen.getByRole("heading", { name: "Employment" }),
      ).toBeInTheDocument();
    });

    it("renders current position", () => {
      render(<Resume />);
      expect(screen.getByText(/Programmer IV/)).toBeInTheDocument();
      expect(screen.getAllByText(/Texas Water Development Board/)).toHaveLength(
        2,
      ); // Two positions at TWDB
      expect(screen.getByText(/Nov\. 2021 - Present/)).toBeInTheDocument();
    });

    it("renders previous programmer position", () => {
      render(<Resume />);
      expect(screen.getByText(/Programmer III/)).toBeInTheDocument();
      expect(screen.getByText(/Dec\. 2019 - Nov\. 2021/)).toBeInTheDocument();
    });

    it("renders graduate research assistant position", () => {
      render(<Resume />);
      expect(
        screen.getByText(/Graduate Research Assistant/),
      ).toBeInTheDocument();
      expect(
        screen.getAllByText(/The University of Texas at Austin/),
      ).toHaveLength(2); // UT appears in education too
      expect(screen.getByText(/2016-2019/)).toBeInTheDocument();
    });

    it("renders engineering writer position", () => {
      render(<Resume />);
      expect(screen.getByText(/Engineering Writer/)).toBeInTheDocument();
      expect(screen.getByText(/Glosten, Inc\./)).toBeInTheDocument();
      expect(screen.getByText(/2014-2016/)).toBeInTheDocument();
    });

    it("includes Water Data For Texas links", () => {
      render(<Resume />);
      const wdftLinks = screen.getAllByRole("link", {
        name: "Water Data For Texas",
      });
      expect(wdftLinks).toHaveLength(2); // One for each job

      wdftLinks.forEach((link) => {
        expect(link).toHaveAttribute("href", "https://waterdatafortexas.org");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
      });
    });
  });

  describe("Education section", () => {
    it("renders education heading", () => {
      render(<Resume />);
      expect(
        screen.getByRole("heading", { name: "Education" }),
      ).toBeInTheDocument();
    });

    it("renders master's degree", () => {
      render(<Resume />);
      expect(screen.getByText("M.S.E.")).toBeInTheDocument();
      expect(
        screen.getAllByText(/Materials Science and Engineering/),
      ).toHaveLength(2); // Both MS and BS
      expect(screen.getAllByText(/2019/)).toHaveLength(5); // Multiple occurrences throughout resume
    });

    it("renders bachelor's degrees", () => {
      render(<Resume />);
      expect(screen.getByText("B.S.")).toBeInTheDocument();
      expect(screen.getByText("B.A.")).toBeInTheDocument();
      expect(screen.getByText(/Columbia University/)).toBeInTheDocument();
      expect(screen.getByText(/Whitman College/)).toBeInTheDocument();
      expect(
        screen.getByText(/Dual-degree program with CU/),
      ).toBeInTheDocument();
    });
  });

  describe("Technical Skills section", () => {
    it("renders technical skills heading", () => {
      render(<Resume />);
      expect(
        screen.getByRole("heading", { name: "Technical Skills" }),
      ).toBeInTheDocument();
    });

    it("lists programming languages and frameworks", () => {
      render(<Resume />);
      expect(
        screen.getByText(
          /Backend web development and scientific programming in Python/,
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/RESTful APIs with Flask, FastAPI/),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/JavaScript\/TypeScript and React/),
      ).toBeInTheDocument();
    });

    it("lists database and infrastructure skills", () => {
      render(<Resume />);
      expect(screen.getByText(/PostgreSQL, sqlite/)).toBeInTheDocument();
      expect(screen.getByText(/Ansible/)).toBeInTheDocument();
      expect(
        screen.getByText(/Linux server administration/),
      ).toBeInTheDocument();
      expect(screen.getByText(/AWS/)).toBeInTheDocument();
    });
  });

  describe("Outreach section", () => {
    it("renders outreach heading", () => {
      render(<Resume />);
      expect(
        screen.getByRole("heading", { name: "Outreach" }),
      ).toBeInTheDocument();
    });

    it("lists robotics and coding club experience", () => {
      render(<Resume />);
      expect(screen.getByText(/Robotics and Coding Club/)).toBeInTheDocument();
      expect(
        screen.getByText(/Cunningham Elementary School/),
      ).toBeInTheDocument();
      expect(screen.getByText(/2018-2019/)).toBeInTheDocument();
    });

    it("lists research experience for teachers", () => {
      render(<Resume />);
      expect(
        screen.getByText(/Research Experience for Teachers/),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/NSF NASCENT Center at UT-Austin/),
      ).toBeInTheDocument();
      expect(screen.getByText(/2017/)).toBeInTheDocument();
    });
  });

  describe("Publications section", () => {
    it("renders publications heading", () => {
      render(<Resume />);
      expect(
        screen.getByRole("heading", {
          name: "Select Publications and Presentations",
        }),
      ).toBeInTheDocument();
    });

    it("lists conference presentation", () => {
      render(<Resume />);
      expect(
        screen.getByText(
          /High-Pressure Vibrational and Optoelectronic Properties/,
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/March Meeting of the American Physical Society/),
      ).toBeInTheDocument();
      expect(screen.getByText(/Los Angeles.*2018/)).toBeInTheDocument();
    });

    it("lists journal publication", () => {
      render(<Resume />);
      expect(
        screen.getByText(/The effect of substrate and surface plasmons/),
      ).toBeInTheDocument();
      expect(screen.getByText(/Scientific Reports/)).toBeInTheDocument();
      expect(screen.getByText(/9\(1\):6147/)).toBeInTheDocument();
    });

    it("renders chemical formula with subscripts", () => {
      render(<Resume />);
      // Look for the specific subscript elements in the chemical formula
      const subscripts = document.querySelectorAll("sub");
      expect(subscripts).toHaveLength(2); // Bi2Te3 has two subscripts
      expect(subscripts[0]).toHaveTextContent("2");
      expect(subscripts[1]).toHaveTextContent("3");
    });
  });

  it("renders all major section headings", () => {
    render(<Resume />);
    const expectedHeadings = [
      "Employment",
      "Education",
      "Technical Skills",
      "Outreach",
      "Select Publications and Presentations",
    ];

    expectedHeadings.forEach((heading) => {
      expect(
        screen.getByRole("heading", { name: heading }),
      ).toBeInTheDocument();
    });
  });

  it("has proper semantic structure with address element", () => {
    render(<Resume />);
    const addressElement = screen.getByRole("group"); // address elements have group role
    expect(addressElement.tagName).toBe("ADDRESS");
  });
});
